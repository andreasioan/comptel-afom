import { Fallout } from './fallout.model';
import { Resolution } from './resolution.model';

export interface DashboardGet {
    fallouts: Fallout[],
    resolutions: Resolution[],
    totalFallouts: number,
    totalResolutions: number,
    falloutsToday: number,
    resolutionsToday: number,
    totalUnresolvesFallouts: number,
    donutChart: {
        startedCount: number,
        createdCount: number, 
        errorCount: number,
        closedFailureCount: number,
        closedSuccessfullCount: number
    }
}