import { IonButton, IonButtons, IonMenuButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonToast } from '@ionic/react';
import React, { useContext, useRef, useState } from 'react';
import { Toast } from '@capacitor/toast';
import { useHistory } from 'react-router-dom';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';

const AddActivity: React.FC = () => {

    const history = useHistory();
    const activitiesCtxt = useContext(ActivitiesContext);

    const [toastMsg, setToastMsg] = useState<string>('');

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null); 
    const houtInput = useRef<HTMLIonDatetimeElement>(null); 
    const showToast = async () => {
        await Toast.show({
          text: 'Actividad creada!',
        });
      };
    const addActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;

        if (title && description && activityType) {
            activitiesCtxt.addActivity(title, description, activityType);
            showToast();
            history.replace('/all-activities');
        }
    };

    return (
        <React.Fragment>
        <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={() => setToastMsg('')}/>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Agregar actividad</IonTitle>
                </IonToolbar>
            </IonHeader>
             <IonContent>
                 <IonGrid>
                     <IonRow>
                         <IonCol className="ion-text-center">
                             <IonSegment ref={activityTypeInput}>
                                <IonSegmentButton value='work'>
                                    <IonLabel>Work</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='rest'>
                                    <IonLabel>Rest</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='hobby'>
                                    <IonLabel>Hobby</IonLabel>
                                </IonSegmentButton>
                             </IonSegment>
                             
                         </IonCol>
                     </IonRow>
                     <IonRow>
                         <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Titulo</IonLabel>
                                <IonInput ref={titleInput} type="text"></IonInput>
                            </IonItem>
                         </IonCol>
                     </IonRow>
                     <IonRow>
                         <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Descripcion</IonLabel>
                                <IonInput ref={descriptionInput} type="text"></IonInput>
                            </IonItem>
                         </IonCol>
                     </IonRow>
                     
                     <IonRow>
                         <IonCol className="ion-text-center ion-margin-top">
                             <IonButton onClick={addActivity} expand='block' fill="outline">Agregar actividad</IonButton>
                         </IonCol>
                     </IonRow>
                 </IonGrid>
             </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default AddActivity;