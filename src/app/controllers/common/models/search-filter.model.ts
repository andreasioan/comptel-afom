export interface SearchFilter {
    orderBy?: {
        column: string,
        orderBy: string
    };
    creationTimestamp?: {
        from: string,
        to: string
    };
    dueDate?: {
        from: string,
        to: string
    };
    search?: {
        query: string,
        column: string
    };
}