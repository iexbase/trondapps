
export interface ProjectModel {
    slug: string;
    name: string;
    author: string;
    email: string;
    short_text: string;
    text: string;
    website_url: string;
    contact_address: string;
    software_license: string;
    status: StatusModel;
    category: CategoryModel;
    github?: string;
    launch_url: string;
    logo_url: string;
    created_at: string;
    updated_at: string;
}

export interface StatusModel {
    id: number;
    name: string;
}

export interface CategoryModel {
    id: number;
    name: string;
}
