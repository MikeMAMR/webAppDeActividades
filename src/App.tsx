import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivity from './pages/AddActivity/AddActivity';
import Info from './pages/AddActivity/info';
import {bodyOutline, newspaperOutline} from 'ionicons/icons';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonMenu side="start" contentId="scheduleAppMi">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>App actividades</IonLabel>
          </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink='/all-activities' routerDirection='none' lines="none">
              <IonIcon color="medium" slot="start" icon={bodyOutline}/>
              <IonLabel>Todas actividades</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink='/add-activity' routerDirection='none' lines="none">
              <IonIcon color="medium" slot="start"  icon={newspaperOutline}/>
              <IonLabel>Agregar actividad</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink='/info' routerDirection='none' lines="none">
              <IonIcon color="medium" slot="start" icon={bodyOutline}/>
              <IonLabel>Información</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
    <ActivitiesContextProvider>
    <IonRouterOutlet id="scheduleAppMi">
        <Route path="/all-activities" component={AllActivities} exact/>
        <Route path="/add-activity" component={AddActivity} exact/>
        <Route path="/info" component={Info} exact/>
        <Redirect to="/all-activities" />
      </IonRouterOutlet> 
    </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
