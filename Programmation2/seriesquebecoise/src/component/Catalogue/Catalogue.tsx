import React from "react";
import { TvShow } from "../TvShow/TvShow";
import { TvShowRow } from "../TvShowRow/TvShowRow";
import district31 from "../../assets/images/district31.jpg";
import serieNoire from "../../assets/images/serieNoire.jpg";
import planB from "../../assets/images/planB.jpg";
import planBS2 from "../../assets/images/planBS2.jpg";
import dixNeufDeux from "../../assets/images/19-2.jpg";
import dugpdcv from "../../assets/images/dugpdcv.jpg";
import Container from "react-bootstrap/Container";

interface Series {
    category: string;
    seriesName: Array<string>;
    seriesImageUrl: Array<string>;
  }
  
  interface SeriesStore {
    store: Array<Series>;
  }

export const Catalogue = () => {

    const [series, setSeries] = React.useState<SeriesStore>({
        store: [
          {
            category: "Most Popular",
            seriesName: [
              "District 31",
              "Série Noire",
              "Plan B saison 1",
              "Plan B saison 2",
              "19-2",
              "Dans une galaxie près de chez vous"
            ],
            seriesImageUrl: [
              district31,
              serieNoire,
              planB,
              planBS2,
              dixNeufDeux,
              dugpdcv
            ]
          },
          {
            category: "Suspense",
            seriesName: [
              "District 31",
              "Série Noire",
              "Plan B saison 1",
              "Plan B saison 2",
              "19-2"
            ],
            seriesImageUrl: [
              district31,
              serieNoire,
              planB,
              planBS2,
              dixNeufDeux
            ]
          },
          {
            category: "Comédie",
            seriesName: [
              "Série Noire",
              "Dans une galaxie près de chez vous"
            ],
            seriesImageUrl: [
              serieNoire,
              dugpdcv
            ]
          },
          {
            category: "Ma Liste",
            seriesName: [],
            seriesImageUrl: []
          }
        ]
      });
    
      const handleAddToList = (e: React.MouseEvent) => {
        e.persist();
        const source = e.currentTarget.parentElement?.nextElementSibling?.getAttribute("src");
        const alt = e.currentTarget.parentElement?.nextElementSibling?.getAttribute("alt");
        const isAlreadyAdded = series.store
          .filter(serie => serie.category === "Ma Liste")[0]
          .seriesImageUrl.filter(url => url === source);
    
        function addToMyList() {
    
          const myList = series.store.filter(serie => serie.category === "Ma Liste")[0];
    
          if (e.currentTarget.classList.contains("add")) {
            if (isAlreadyAdded.length) {
              alert("Cannot add this serie as it is already in your list.");
              return;
            };
            myList.seriesImageUrl.push(source ? source : "");
            myList.seriesName.push(alt ? alt : "");          
          } else {
            if (!isAlreadyAdded.length) {
              alert("Cannot remove this series from your list, it is not added yet.");
              return;
            }
            series.store
              .filter(serie => serie.category === "Ma Liste")[0]
              .seriesImageUrl.splice(myList.seriesImageUrl.findIndex(s => s === source), 1);
            series.store
              .filter(serie => serie.category === "Ma Liste")[0]
              .seriesName.splice(myList.seriesImageUrl.findIndex(a => a === alt), 1);
          }
          
          return series;
        };
    
        const newState = addToMyList();
    
        setSeries((state) => {
          return Object.assign({}, state, newState);
        });
      };
    
      const rows = series.store.map((serie, i) => {
        const s = serie.seriesImageUrl.map((x, y) => {
          return <TvShow key={y + Math.random() * (Math.random() * 5)} onClick={handleAddToList} url={x} title={serie.seriesName[y]} />
        })
        return <TvShowRow key={i + Math.random() * (Math.random() * 5)} category={serie.category}>
          {s}
        </TvShowRow>
      });
    
    return (
        <Container fluid >
            {rows}
        </Container>
    );
}