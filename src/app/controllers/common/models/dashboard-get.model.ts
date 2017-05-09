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
        falloutsDay0: number,falloutsDay1: number,falloutsDay2: number,falloutsDay3: number,falloutsDay4: number,falloutsDay5: number,
        resolutionsDay0: number,resolutionsDay1: number,resolutionsDay2: number,resolutionsDay3: number,resolutionsDay4: number,resolutionsDay5: number,
    }
}