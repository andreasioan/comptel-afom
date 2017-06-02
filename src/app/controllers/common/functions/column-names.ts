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
		default: return column;
	}
}

export function getColumnDisplayName(column: string) {
	switch (column) {
		case 'id':
			return 'ID';
		case 'source_system':
			return 'Source System';
		case 'source_fallout_id':
			return 'Source Fallout ID';
		case 'source_error_code':
			return 'Error Code';
		case 'creation_date':
			return 'Creation Date';
		case 'due_date':
			return 'Due Date';
		case 'status':
			return 'Status';
		case 'source_fallout_id':
			return 'Fallout ID';
		case 'action_id':
			return 'Action ID';
		case 'target_system':
			return 'Target System';
		case 'retry_count':
			return 'Retry Count';
		case 'error_desc':
			return 'Error Desc';
		default: return column;
	}
}
