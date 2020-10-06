import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function FormEditerPokemonHooks(props: any) {
  const location = useLocation();
  const [donneesRecues, setDonneesRecues] = useState({ name: '', picture: "", abilities: [{ name: "" }, { name: "" }] });
  const [data, setData] = useState({
    name: "",
    picture: "",
    ability1: "",
    ability2: ""
  });
  const [pokemonID, setPokemonID] = useState<number>(0);
  const [photo, setPhotos] = useState("");
  //Ajout de la gestion des erreurs
  useEffect(() => {
    getPokemonInfos();
  }, [pokemonID]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async function getPokemonInfos() {
    setPokemonID(parseInt(location.pathname.split("/")[1]));
    try {
      const response = await fetch("http://localhost:3001/pokemons/");
      const reponseDeApi = await response.json();
      //on reçoit un array, je vais donc chercher le bon pokemon en utilisant l'index de l'array
      setDonneesRecues(reponseDeApi[pokemonID]);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editPokemon(nom:string,photo: string,attaque1: string, attaque2: string) { 
    try{ 
      const response = await fetch('http://localhost:3001/pokemons/'+ pokemonID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : pokemonID,
          name: nom,
          picture: photo,
          abilities: [
            {
              name: attaque1
            },
            {
              name: attaque2
            }
          ]
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        props.history.push("/");
        toast.success("Modification du Pokémon " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async function removePokemon() { 
    try{ 
    const response = await fetch('http://localhost:3001/pokemons/'+ pokemonID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      const jsonResponse = await response.json(); 
      props.history.push("/");
      toast.error("Supression du Pokémon ");

      return jsonResponse; 
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}

  function handleEdit(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    
    /* Dans React, la modification du DOM directe se fait uniquement par des ref. 
    Ça fonctionne toutefois ça viens contredire un peu la manière que React marche.
    La manière que je préfère gérer ça est en utilisant un state en objet, OU un state par input*/
    // const nom = document.getElementById('nomPokemon').value;
    // const photo = document.getElementById('photoPokemon').value;
    // const attaque1 = document.getElementById('attaque1').value;
    // const attaque2 = document.getElementById('attaque2').value;

    //le "this" n'est pas utile dans une fonction. 
    //this.editPokemon(nom,photo,attaque1,attaque2);

    editPokemon(data.name, data.picture, data.ability1, data.ability2);
  }

  function handlePhoto(){
    setPhotos(data.picture);
  }

  // La fonciton pour changer le state, ça remplace tout ce qui était dans la fonction handleEdit
  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const property = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    setData(prevState => (Object.assign({}, prevState, { [property]: value })));
    if (property === "ability1") return setDonneesRecues(prevState => (Object.assign({}, prevState, donneesRecues.abilities[0].name = "")));
    if (property === "ability2") return setDonneesRecues(prevState => (Object.assign({}, prevState, donneesRecues.abilities[1].name = "")));
    setDonneesRecues(prevState => (Object.assign({}, prevState, { [property]: "" })));
  }
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomPokemon">
                <Form.Label>Nom du Pokemon</Form.Label>
                <Form.Control name="name" type="text" onChange={handleChange} value={data.name || donneesRecues.name} /> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo du Pokemon</Form.Label>
                  <Form.Control name="picture" type="text" placeholder="Entrer une URL valide" onChange={handleChange} onBlur={handlePhoto} value={data.picture || donneesRecues.picture} />
              </Form.Group>
              {donneesRecues.picture && <Image src={donneesRecues.picture} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control name="ability1" type="text" placeholder="Entrer le nom de l'attaque 1" onChange={handleChange} value={data.ability1 || donneesRecues.abilities[0].name} />
              </Form.Group>
              <Form.Group controlId="attaque2">
                <Form.Label>Nom de l'attaque 2</Form.Label>
                <Form.Control name="ability2" type="text" placeholder="Entrer le nom de l'attaque 2" onChange={handleChange} value={data.ability2 || donneesRecues.abilities[1].name} />
              </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={removePokemon}>Supprimer le Pokemon</p>
        </Container>
      </>
    );
  }

  export default FormEditerPokemonHooks;