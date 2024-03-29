import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // articles = []
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // document.title = `${this.capitalizeFirstLetter(
  //   props.category
  // )}-NewsCoutnter`;

  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalresult] = useState(0);

  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let dataJson = await data.json();
    props.setProgress(70);
    setArticles(dataJson.articles);
    setTotalresult(dataJson.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
    props.category
  )}-NewsCoutnter`;
    update();
    //eslint-disable-next-line
  }, []);

  // const handlPrevClick = async () => {
  //   setpage(page - 1 );
  //   update();
  // };
  // const handlNextClick = async () => {
  //   setpage( page + 1 );
  //   update();
  // };

  const fetchMoreData = async () => {
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let dataJson = await data.json();
    setArticles(articles.concat(dataJson.articles));
    setTotalresult(dataJson.totalResults);
    setloading(false);
  };

  return (
    <div className="container my-3" style={props.mystyle}>
      <h1 className="text-center " style={{ margin: "70px" }}>
        NewsCounter - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <div className="text-center">
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {
                /*!(loading) && */
                articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        mystyle={props.mystyle}
                        title={element.title ? element.title.slice(0, 45) : ""}
                        descrpition={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                        imageUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "data:image/jpeg;base64,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"
                        }
                        newsUrl={element.url}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </InfiniteScroll>
      </div>

      {/* next and previous button  */}

      {/* <div className="d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            onClick={handlPrevClick}
            className="btn btn-outline-info"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            onClick={handlNextClick}
            className="btn btn-outline-info"
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
