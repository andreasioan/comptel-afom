export class Resolution {
    constructor(
        public ID: number,
        public FalloutID: String,
        public ActionID: String,
        public SourceSystem: String,
        public CreationDate: String,
        public DueDate: String,
        public Status: String,
        public RetryCount: Number,
        public ErrorCode: String,
        public ErrorDesc: String
    ){}
}