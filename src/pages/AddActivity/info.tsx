import { IonButton, IonButtons, IonMenuButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonToast, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import React from 'react';
import { Browser } from '@capacitor/browser';

const Info: React.FC = () => {
    const openCapacitorSite = async () => {
        await Browser.open({ url: 'http://capacitorjs.com/' });
      };
      const openIonicDocsSite = async () => {
        await Browser.open({ url: 'https://ionicframework.com/docs/' });
      };
    return (
        <React.Fragment>
        
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Ver información</IonTitle>
                </IonToolbar>
            </IonHeader>
             <IonContent>
                 <IonGrid>
                     <IonRow>
                         <IonCol className="ion-text-center ion-margin-top">
                         <IonCard>
                                <img src="/assets/images/capa.png" alt="Activity"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>Información</IonCardSubtitle>
                                    <IonCardTitle>Capacitor</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p>Ver la información de capacitor</p>
                                    <IonItem lines="none">
                                        <IonButton
                                            
                                            fill="clear"
                                            onClick={openCapacitorSite}>
                                            Link
                                        </IonButton>
                                        
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                         </IonCol>
                         
                     </IonRow>
                     <IonRow>
                     <IonCol className="ion-text-center ion-margin-top">
                         <IonCard>
                                <img src="/assets/images/ionic.png" alt="Activity"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>Información</IonCardSubtitle>
                                    <IonCardTitle>Ionic Doc</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p>Ver la información de Ionic Docs</p>
                                    <IonItem lines="none">
                                        <IonButton
                                            
                                            fill="clear"
                                            onClick={openIonicDocsSite}>
                                            Link
                                        </IonButton>
                                        
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                         </IonCol>
                     </IonRow>
                 </IonGrid>
             </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default Info;