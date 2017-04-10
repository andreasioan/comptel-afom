import { Resolution } from '../../models/resolution.model';

export const RESOLUTIONS: Resolution[] = [
	new Resolution(
		1,
        "AFOM00001",
        "ACT006",
        "HFC-SRI",
        "25/03/17 11:24",
        "27/03/17 11:24",
        "CLOSED-SUCCESSFUL",
        null
	),
    new Resolution(
		2,
        "AFOM00002",
        "ACT007",
        "PNI",
        "25/03/17 08:17",
        "27/03/17 08:17",
        "ERROR",
        null
	),
    new Resolution(
		3,
        "AFOM00003",
        "ACT007",
        "PNI",
        "23/03/17 09:43",
        "25/03/17 09:43",
        "RETRY-FAILURE",
        3
	),
    new Resolution(
		4,
        "AFOM00004",
        "ACT010",
        "PNI",
        "22/03/17 03:49",
        "24/03/17 03:49",
        "CLOSED-FAILURE",
        null
	),
    new Resolution(
		5,
        "AFOM00005",
        "ACT001",
        "FTTN-SRI",
        "27/03/17 11:10",
        "29/03/17 11:10",
        "CREATED",
        null
	),
    new Resolution(
		6,
        "AFOM00006",
        "ACT003",
        "PNI",
        "27/03/17 20:30",
        "29/03/17 20:30",
        "RETRY-FAILURE",
        2
	),
    new Resolution(
		7,
        "AFOM00007",
        "ACT008",
        "FTTN-SRI",
        "27/03/17 13:01",
        "29/03/17 13:01",
        "CLOSED-SUCCESSFUL",
        null
	)
];