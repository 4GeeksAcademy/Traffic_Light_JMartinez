import React, {useState} from "react";//1. importar el hook useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {


	const Fila_1 = {height:"150px", width:"10px"}
	const Semaforo = {height:"500px", width:"200px"}
	const stylebotton = {height:"90%", width:"90%"}
	
	
 
	const [countR,setRed]=useState(25)
	const [countO,setOrange]=useState(25)
	const [countG,setGreen]=useState(25)
	const [countV,setViolet]=useState(25)
	const [disa,setDisabled]=useState("none")
	const [colores,setColores]=useState([1,2,3])

	


	function CouR() {
		setViolet(25)
		setGreen(25)
		setOrange(25)
		setRed(100)
	}
	function CouO() {
		setViolet(25)
		setGreen(25)
		setRed(25)
		setOrange(100)
	}
	function CouG() {
		setViolet(25)
		setRed(25)
		setOrange(25)
		setGreen(100)
	}

	function CouV() {
		setRed(25)
		setOrange(25)
		setGreen(25)
		setViolet(100)
	}

	function Disable() {
		if (disa == "none") {
		setDisabled("block")
		setColores([...colores,4])
		} else {setDisabled("none")
			setColores([...colores,4])
			setColores ([colores.splice(colores.length -1 , colores.length)])

	}
		
		
		console.log(colores)
	}


	function color() {
		let  numero = Math.floor(Math.random()*4 + 1);
		
		if (numero == 1 ){
			CouR()
		}else if (numero == 2 ) {
			CouO()
		}else if (numero == 3) {
			CouG()
		}else if (numero == 4 && disa == "block" ) {
			CouV()
		} 
		console.log(numero)
	}

	return (
		<div className="text-center">
			<div className="row h-100 w-25 m-auto d-flex justify-content-center">
				<div className="pa bg-black  " style={Fila_1} ></div>
			</div>
			<div className=" hom m-auto p-1 bg-black rounded d-flex align-items-center  justify-content-center " style={Semaforo}>
				<div className="d-flex flex-column w-75 h-100 align-items-center  justify-content-around">
				<div><button type="button" className={"col-12 btn btn-danger   m-2  p-4 rounded-circle   opacity-" + countR}  onClick={CouR} style={stylebotton} ></button></div>
				<div><button type="button" className={"col-12 btn btn-warning  m-2  p-4 rounded-circle   opacity-" + countO}  onClick={CouO} style={stylebotton} ></button></div>
				<div><button type="button" className={"col-12 btn btn-success  m-2  p-4 rounded-circle   opacity-" + countG}  onClick={CouG} style={stylebotton} ></button></div>
				<div className={"d-" + disa}><button type="button" className={"col-12 btn bg-info      m-2  p-4 rounded-circle   opacity-" + countV}  onClick={CouV} style={stylebotton} ></button></div>	
				</div>
			</div>

			<button type="button" class="btn btn-primary m-2" onClick={color} >Random</button>
			<button type="button" class="btn btn-primary m-2" onClick={Disable} >Nuevo color</button>
			
		</div>
	);
};

export default Home;
