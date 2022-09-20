import { Classified } from '../../models/classified'

export function useClassified() {
  //
  function checkIfData() {
    if (!localStorage['classifieds']) {
      localStorage['classifieds'] = JSON.stringify([
        {
          id: 1,
          name: 'Pepito',
          surname: 'Perez',
          email: 'pepito@gmail.com',
          phoneNumber: '3204347429',
          address: 'Carrera 51 #66 - 13'
        },
        {
          id: 2,
          name: 'Vicente',
          surname: 'Fernández',
          email: 'pepito@gmail.com',
          phoneNumber: '3204347429',
          address: 'Carrera 51 #66 - 13'
        },
        {
          id: 3,
          name: 'John',
          surname: 'Deo',
          email: 'johndoe2211@gmail.com',
          phoneNumber: '33757005467',
          address: 'Rda. de Atocha, 35, 28012 Madrid, España'
        }
      ])

      //
      // localStorage['classifieds'] = '[]'
    }
  }

  function getAllClassifieds(): Classified[] {
    checkIfData()

    let classifieds = localStorage['classifieds']
    classifieds = JSON.parse(classifieds)
    return classifieds
  }

  function createNewClassified(newCustomer: Classified) {
    let classifieds = getAllClassifieds()
    classifieds.push(newCustomer)
    localStorage['classifieds'] = JSON.stringify(classifieds)
  }

  function deleteCustomerById(id: number) {
    let classifieds = getAllClassifieds()

    let indice = classifieds.findIndex((classified) => classified.id === id)
    classifieds.splice(indice, 1)
    localStorage['classifieds'] = JSON.stringify(classifieds)
  }

  function getCustomerById(id: string) {
    checkIfData()

    let classifieds = getAllClassifieds()
    // classifieds.find((classified: any) => classified.id === id)
    return classifieds.find((classified) => classified.id === parseInt(id, 10))
  }

  return {
    getAllClassifieds,
    createNewClassified,
    deleteCustomerById,
    getCustomerById
  }
}
