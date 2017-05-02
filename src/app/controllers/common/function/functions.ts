function getColumnName(column: string) {
    switch (column) {
        case 'ID':
            return 'id';
        case 'Source':
            return 'source';
        case 'Source Fallout ID':
            return 'source_fallout_id';
        case 'Error Code':
            return 'error_code';
        case 'Creation Timestamp':
            return 'creation_timestamp';
        case 'Due Date':
            return 'due_date';
        case 'Status':
            return 'status';
        case 'Fallout ID':
            return 'source_fallout_id';
        case 'Action ID':
            return 'action_id';
        case 'Source System':
            return 'target_system';
        case 'Retry Count':
            return 'retry_count';
    }
}

export { getColumnName };