import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import ReactTable from "components/ReactTable/ReactTable.js";
import axios from "axios";

const dataTable = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61", "5"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"],
];


class ReactTables extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          // position: prop[1],
          // office: prop[2],
          // age: prop[3],
          // sd : prop[4],
          customers: '',  
          completed: 0 ,
          searchKeyword: '',
          
        };
      }),
    };
  }

  // constructor(props) {
  //   super(props);
  //   this.state.customers.map = {  
  //     customers: '',  
  //     completed: 0 ,
  //     searchKeyword: ''
  //   }}

  // constructor(props){
  //   super(props);
  //   this.state= { datalist:[]};
  //   // this.state.customers
  // }

  stateRefresh() {  
    this.setState({ 
      customers: '', 
      completed: 0,
      searchKeyword : ''
    }); 
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20); /* progress 0.02초마다 */
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));  
  }

  // componentDidMount(){
  //   this.callApi()
  //   .then(res => this.setState({data: res}))
  //   console.log(this.state.data);
  // }


  callApi = async () => {
    try{
    const response = await fetch('/api/st');
    const body = await response.json();
    this.setState({ data : response.body})
    console.log(body);

    if (response.status !== 200) throw Error(body.message);
    return body;
  }catch (error) {
    alert(error)
  }
  };
  

  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">React-Tables</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}

                    columns={[
                      {
                        Header: "Name",
                        accessor: "name",
                      },
                      {
                        Header: "Position",
                        accessor: "position",
                      },
                      {
                        Header: "Office",
                        accessor: "office",
                      },
                      {
                        Header: "Age",
                        accessor: "age",
                      },
                      {
                        Header: "4",
                        accessor: "sd",
                      },
                      {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false,
                      },
                    ]}
                    /*
                      You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                    */
                    className="-striped -highlight primary-pagination"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ReactTables;
