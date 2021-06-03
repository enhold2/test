import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './components/Modals/Modal'
import DataTable from './components/Tables/DataTable'
import { CSVLink } from "react-csv"


// const styles= theme => ({
//   root : {
//     width : '100%',
//     miniwidth:1000
//   },
//   menu: {
//     marginTop: 15,
//     marginBottom: 15,
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   paper:{
//     marginLeft:18,
//     marginRight:18
//   }
// })

function App(props) {

  const [items, setItems] = useState([])

  const getItems= () => {
    fetch('/admin/api/st')
      .then(response => response.json())
      .then(items => setItems(items))
      .catch(err => console.log(err))
  }

  const addItemToState = (item) => {
    setItems([...items, item])
  }

  const updateState = (item) => {
    const itemIndex = items.findIndex(data => data.id === item.id)
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
    setItems(newArray)
  }

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  useEffect(() => {
    getItems()
  }, []);

  return (
      <Container className="App"  > 
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>CRUD Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={items}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add Item" addItemToState={addItemToState}/>
          </Col>
        </Row>
      </Container>
  )
}

export default App