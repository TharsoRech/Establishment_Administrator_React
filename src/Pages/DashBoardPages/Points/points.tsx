import {BodyPoints,Title,Subtitle,FormControl,Spinner} from './styled';
import Cookies from "js-cookie";
import {Ponto} from '../../../Core/Models/Ponto';
import {useState,useEffect} from 'react';
import MeshApi from '../../../Core/Services/AuthenticationService'
import DataTable from 'react-data-table-component';

const PointsPage = () => {
    const [ListPoints, setListPoints] = useState<Ponto[]>([]);
    const [ListPointsTemp, setListPointsTemp] = useState<Ponto[]>([]);
    const [pending, setPending] = useState(true);
    
    const columns = [
        {
            name: 'Cliente',
            selector: (row:any) => row.Cliente,
            sortable: true,
        },
        {
            name: 'Cpf',
            selector: (row:any) => row.Cpf,
            sortable: true,
        },
        {
            name: 'Pontos',
            selector: (row:any) => row.Pontos,
            sortable: true,
        },
        {
            name: 'ValorCompra',
            selector: (row:any) => row.ValorCompra,
            sortable: true,
        },
        {
            name: 'EfetividaEm',
            selector: (row:any) => row.EfetividaEm,
            sortable: true,
        },
    ];
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
                backgroundColor: '#1d3d5b',
                border: '1px solid #FBC108',
                color: '#FBC108',
            },
        },
        headCells: {
            style: {
                paddingLeft: '16px', // override the cell padding for head cells
                paddingRight: '8px',
                backgroundColor: '#1d3d5b',
                border: '1px solid #FBC108',
                color: '#FBC108',
            },
        },
        cells: {
            style: {
                paddingLeft: '16px', // override the cell padding for data cells
                paddingRight: '8px',
                backgroundColor: '#1d3d5b',
                border: '1px solid #FBC108',
                color: '#FBC108',
            },
        },
        pagination: {
            style: {
                backgroundColor: '#1d3d5b',
                border: '1px solid #FBC108',
                color: '#FBC108',
            },
        },
    };
    const CustomLoader = () => (
        	<div style={{ padding: '24px' }}>
        		<Spinner />
        		<div>Fancy Loader...</div>
        	</div>
        );
        
    const api = MeshApi();
    useEffect(() => {
        GetPoints();
      });

    const GetPoints = async () => {
        if(ListPoints.length <= 0){
            const timeout = setTimeout(async () => {
                var result = await api.getPoints();
                setListPointsTemp(result)
                setListPoints(result);
            }, 2000);
            return () => clearTimeout(timeout);
        }
        setPending(false);
      }

    const applyFilter = (filterValue: any) => {
        let filterValueLower = filterValue.target.value.toLowerCase();
        if(filterValue === '' ) {
            setListPoints(ListPointsTemp);
        } 
        else {
          let listPointsTemp = ListPointsTemp.filter((val:any) =>val.Cliente.toLowerCase().includes(filterValueLower) ||
          val.Cpf.toLowerCase().includes(filterValueLower) || val.Pontos.toLowerCase().includes(filterValueLower)
          || val.ValorCompra.toLowerCase().includes(filterValueLower)|| val.EfetividaEm.toLowerCase().includes(filterValueLower));
          setListPoints(listPointsTemp);
    } 
    }

    return(
        <BodyPoints>
        <Title> Histórico de pontos</Title>
        <Subtitle>Procure seu histórico de pontos aqui:</Subtitle>
        <FormControl id="Pesquise" type="text" placeholder="Digite aqui.." onChange={applyFilter}/>
        <div className="table-responsive-sm m-5">
        <DataTable
      columns={columns}
      data={ListPoints}
      progressPending={pending}
      customStyles={customStyles} 
      progressComponent={<CustomLoader />}
      pagination
    />
     </div>
     </BodyPoints>
    );
}
export default PointsPage;