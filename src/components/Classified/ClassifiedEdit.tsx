import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { checkmark } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Classified } from '../../models/classified'
import { useClassified } from './useClassified'

export const ClassifiedEdit: React.FC = () => {
  const history = useHistory()
  const { userId } = useParams<{ userId: string }>()

  const [classified, setCustomer] = useState<Classified>({
    id: 1,
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    address: ''
  })

  const { createNewClassified, getCustomerById } = useClassified()

  useEffect(() => {
    if (userId !== 'new') {
      setCustomer(getCustomerById(userId)!)
    }
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{userId === 'nuevo' ? 'Agregar nuevo clasificado' : 'Editar clasificado'}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonContent>
          <IonCard>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombres</IonLabel>
                  <IonInput onIonChange={(e) => (classified.name = e.detail.value!)} value={classified.name} placeholder="Ingrese los nombres aquí."></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Apellidos</IonLabel>
                  <IonInput onIonChange={(e) => (classified.surname = e.detail.value!)} value={classified.surname} placeholder="Ingrese los apellidos aquí."></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Dirección de corrreo electrónico</IonLabel>
                  <IonInput onIonChange={(e) => (classified.email = e.detail.value!)} value={classified.email} placeholder="Ingrese el corrreo electrónico aquí."></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Número celular</IonLabel>
                  <IonInput onIonChange={(e) => (classified.phoneNumber = e.detail.value!)} value={classified.phoneNumber} placeholder="Ingrese el número celular aquí."></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Dirección de residencia (domicilio)</IonLabel>
                  <IonInput onIonChange={(e) => (classified.address = e.detail.value!)} value={classified.address} placeholder="Ingrese la dirección o domicilio aquí."></IonInput>
                </IonItem>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>

            <IonItem>
              <IonButton
                onClick={() => {
                  classified.id = Math.round(Math.random() * 100000)
                  createNewClassified(classified)
                  history.push('/clientes')
                }}
                color="success"
                fill="solid"
                slot="end"
                size="small"
              >
                <IonIcon icon={checkmark} slot="icon-only" />
                Guardar
              </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  )
}
