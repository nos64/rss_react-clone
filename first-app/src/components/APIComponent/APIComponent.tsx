import APICard from 'components/APICard/APICard';
import React, { Component } from 'react';
import style from './APIComponent.module.scss';

interface IPropsAPI {
  props?: string;
}

interface IStateAPI {
  error: null | { message: string };
  isLoaded: boolean;
  items: ICharacter[];
}
interface IItems {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

const BASE_PATH = 'https://rickandmortyapi.com/api';
const CHARACTERS = `${BASE_PATH}/character`;
const LOCATIONS = `${BASE_PATH}/location`;
const EPISODES = `${BASE_PATH}/episode`;
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

export default class APIComponent extends Component<IPropsAPI, IStateAPI> {
  constructor(props: IPropsAPI) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount(): void {
    fetch(`${CHARACTERS}`)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p> Loading...</p>;
    } else {
      return (
        <ul className={style.card__list}>
          {items.map(
            ({
              id,
              name,
              gender,
              image,
              status,
              species,
              origin,
              location,
              type,
              episode,
              created,
              url,
            }) => (
              <APICard
                key={id}
                id={id}
                name={name}
                image={image}
                status={status}
                gender={gender}
                species={species}
                origin={origin}
                location={location}
                type={type}
                episode={episode}
                created={created}
                url={url}
              />
            )
          )}
        </ul>
      );
    }

    // id={item.id}
    // name={item.name}
    // status={item.status}
    // species={item.species}
    // type={item.type}
    // gender={item.gender}
    // origin={item.origin}
    // location={item.id}
    // image={item.id}
    // episode={item.id}
    // created={item.id}

    // const { searchQuery, result } = this.state;
    // const { hits } = result;
    // console.log(result);
    // return (
    //   <div>
    //     <ul>
    //       {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) => (
    //         <li key={objectID}>
    //           <div>
    //             <a href={url}>{title}</a>
    //             <span>{`${points} points`}</span>
    //             <span>{`${num_comments} comments`}</span>
    //             <span>{new Date(created_at).toLocaleDateString()}</span>
    //             <span>{author}</span>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  }
}
