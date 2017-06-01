export function getColumnName(column: string) {
	switch (column) {
		case 'ID':
			return 'id';
		case 'Source System':
			return 'source_system';
		case 'Source Fallout ID':
			return 'source_fallout_id';
		case 'Error Code':
			return 'source_error_code';
		case 'Creation Date':
			return 'creation_date';
		case 'Due Date':
			return 'due_date';
		case 'Status':
			return 'status';
		case 'Fallout ID':
			return 'source_fallout_id';
		case 'Action ID':
			return 'action_id';
		case 'Target System':
			return 'target_system';
		case 'Retry Count':
			return 'retry_count';
		case 'Error Desc':
			return 'error_desc';
	}
}
