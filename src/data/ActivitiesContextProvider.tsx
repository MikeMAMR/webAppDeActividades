import React, {useState} from "react";
import ActivitiesCotext, {ActivitiesContextModel, Activity, ActivityType} from "./activities-context";

const ActivitiesContextProvider: React.FC= (props) => {
    
    const [activities, setActivities] = useState<Activity[]>([
        
    ]);
    const addActivity = (title: string, description: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch(activityType) {
            case 'rest':
                imageUrl = '/assets/images/cat.jpg'
                break;
            case 'hobby':
                imageUrl = '/assets/images/cat.jpg'
                break;
            case 'work':
                imageUrl = '/assets/images/cat.jpg'
                break;
            default:
                imageUrl = '/assets/images/cat.jpg'
                break;
        };

        const activityDate = new Date();
        const hour = activityDate.getHours() + ':' + activityDate.getMinutes();

        const addActivity: Activity = {
            id: Math.random().toString(),
            title,
            description,
            hour,
            activityType,
            imageUrl,
            isCompleted: false
        };

        setActivities(currActivities => {
            return [...currActivities, addActivity]
        })
    };

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity
    };

    return (
        <ActivitiesCotext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesCotext.Provider>
    );

};
export default ActivitiesContextProvider;