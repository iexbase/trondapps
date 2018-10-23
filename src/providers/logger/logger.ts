/* tslint:disable:no-console */
import { Injectable, isDevMode } from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class Logger {
    public levels: any;
    public weight: any;
    public logs: any;

    constructor() {
        this.logs = [];
        this.levels = [
            { level: 'error', weight: 1, label: 'Error', def: false },
            { level: 'warn', weight: 2, label: 'Warning', def: false },
            { level: 'info', weight: 3, label: 'Info', def: true },
            { level: 'debug', weight: 4, label: 'Debug', def: false }
        ];

        this.weight = {};
        for (let i = 0; i < this.levels.length; i++) {
            this.weight[this.levels[i].level] = this.levels[i].weight;
        }
    }

    public error(message?: any, ...optionalParams: any[]): void {
        const msg =
            '[error] ' + (_.isString(message) ? message : JSON.stringify(message));
        console.log(msg, ...optionalParams);
        const args = this.processingArgs(arguments);
        this.add('error', args);
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        const msg =
            '[debug] ' + (_.isString(message) ? message : JSON.stringify(message));
        if (isDevMode()) { console.log(msg, ...optionalParams); }
        const args = this.processingArgs(arguments);
        this.add('debug', args);
    }

    public info(message?: any, ...optionalParams: any[]): void {
        const msg =
            '[info] ' + (_.isString(message) ? message : JSON.stringify(message));
        if (isDevMode()) { console.log(msg, ...optionalParams); }
        const args = this.processingArgs(arguments);
        this.add('info', args);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        const msg =
            '[warn] ' + (_.isString(message) ? message : JSON.stringify(message));
        if (isDevMode()) { console.log(msg, ...optionalParams); }
        const args = this.processingArgs(arguments);
        this.add('warn', args);
    }

    public getLevels() {
        return this.levels;
    }

    public getWeight(weight: any) {
        return _.find(this.levels, l => {
            return l.weight === weight;
        });
    }

    public getDefaultWeight() {
        return _.find(this.levels, l => {
            return l.def;
        });
    }

    public add(level: any, msg: any) {
        msg = msg.replace('/xpriv.*/', '[...]');
        msg = msg.replace('/walletPrivKey.*/', 'walletPrivKey:[...]');
        this.logs.push({
            timestamp: new Date().toISOString(),
            level,
            msg
        });
    }

    /**
     * Returns logs of <= to filteredWeight
     */
    public get(filterWeight?: number) {
        let filteredLogs = this.logs;
        if (filterWeight !== undefined) {
            filteredLogs = _.filter(this.logs, l => {
                return this.weight[l.level] <= filterWeight;
            });
        }
        return filteredLogs;
    }

    public processingArgs(argsValues: any) {
        let args = Array.prototype.slice.call(argsValues);
        args = args.map((v: any) => {
            try {
                if (typeof v === 'undefined') { v = 'undefined'; }
                if (!v) { v = 'null'; }
                if (typeof v === 'object') {
                    v = v.message ? v.message : JSON.stringify(v);
                }
            } catch (e) {
                console.log('Error at log decorator:', e);
                v = 'undefined';
            }
            return v;
        });
        return args.join(' ');
    }
}
