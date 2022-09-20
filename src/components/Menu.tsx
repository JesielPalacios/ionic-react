import { IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRow } from '@ionic/react'

import { apps, appsOutline, bookmarkOutline, logoGoogle, newspaper, newspaperOutline, people, peopleOutline, trailSign, trailSignOutline } from 'ionicons/icons'
import { useLocation } from 'react-router-dom'
import './Menu.css'

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'Noticias',
    url: '/noticias',
    iosIcon: newspaperOutline,
    mdIcon: newspaper
  },
  {
    title: 'Clasificados',
    url: '/clasificados',
    iosIcon: peopleOutline,
    mdIcon: people
  },
  {
    title: 'Capacitaciones',
    url: '/capacitaciones',
    iosIcon: trailSignOutline,
    mdIcon: trailSign
  },
  {
    title: 'Recursos y herramientas',
    url: '/recursos-y-herramientas',
    iosIcon: appsOutline,
    mdIcon: apps
  }
]

const labels = ['Deportes', 'Diseño y moda', 'Tecnología', 'Ciber seguridad', 'Viajes']
const labels2 = ['Familia', 'Amigos', 'Notas', 'Trabajo', 'Recuerdos']

export const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId="main" type="overlay" maxEdgeStart={100}>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Jesiel Virtual S.A.</IonListHeader>
          <IonNote>
            <IonRow>
              <IonCol>
                <IonIcon icon={logoGoogle} />
              </IonCol>
              <IonCol>jesielvirtualsa@gmail.com</IonCol>
            </IonRow>
          </IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>A continuación los temas más recientes!</IonListHeader>
          <IonRow>
            <IonCol>
              {labels.map((label, index) => (
                <IonItem lines="none" key={index}>
                  <IonIcon slot="start" icon={bookmarkOutline} />
                  <IonLabel>{label}</IonLabel>
                </IonItem>
              ))}
            </IonCol>
            <IonCol>
              {labels2.map((label, index) => (
                <IonItem lines="none" key={index}>
                  <IonIcon slot="start" icon={bookmarkOutline} />
                  <IonLabel>{label}</IonLabel>
                </IonItem>
              ))}
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}
