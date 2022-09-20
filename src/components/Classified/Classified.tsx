import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { add, close, pencil } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Classified } from '../../models/classified'
import { useClassified } from './useClassified'

export const ClassifiedList: React.FC = () => {
  const history = useHistory()

  const [classifieds, setCustomers] = useState<Classified[]>([])

  const { getAllClassifieds, createNewClassified, deleteCustomerById } = useClassified()

  useEffect(() => {
    setCustomers(getAllClassifieds)
  })

  function pruebaLocalStorage() {
    const customerExample: Classified = {
      id: 4,
      name: 'Pepito',
      surname: 'Perez',
      email: 'pepito@gmail.com',
      phoneNumber: '3204347429',
      address: 'Carrera 51 #66 - 13'
    }

    createNewClassified(customerExample)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gestión de Clasificados</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gestión de Clasificados</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard>
            {/*  */}
            <IonItem>
              <IonButton onClick={() => history.push('/noticias')} color="primary" fill="solid" slot="end" size="small">
                <IonIcon icon={add} />
                Agregar Clasificado
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {classifieds.map((classified: Classified) => (
                <IonRow key={classified.id}>
                  <IonCol>
                    {classified.name} {classified.surname}
                  </IonCol>
                  <IonCol>{classified.email}</IonCol>
                  <IonCol>{classified.phoneNumber}</IonCol>
                  <IonCol>{classified.address}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => history.push('/clasificado/' + classified.id)} color="primary" fill="clear">
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>
                    <IonButton
                      onClick={() => {
                        deleteCustomerById(classified.id)
                        getAllClassifieds()
                      }}
                      color="danger"
                      fill="clear"
                    >
                      <IonIcon icon={close} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonCard>

          <IonItem>
            <IonButton
              onClick={() => {
                pruebaLocalStorage()
                getAllClassifieds()
              }}
              color="danger"
              fill="clear"
            >
              Prueba Local Storage
            </IonButton>
          </IonItem>
        </IonContent>
      </IonContent>
    </IonPage>
  )
}
