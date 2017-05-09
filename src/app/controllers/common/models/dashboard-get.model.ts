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
    },
    barChart: {
        falloutsMonth0: number,falloutsMonth1: number,falloutsMonth2: number,falloutsMonth3: number,falloutsMonth4: number,falloutsMonth5: number,
        resolutionsMonth0: number,resolutionsMonth1: number,resolutionsMonth2: number,resolutionsMonth3: number,resolutionsMonth4: number,resolutionsMonth5: number,
    }
}