import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    badgeColor: "success",
    apiKey: "e1cbf7941ba44b37bcf9e51cf289b804",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    badgeColor: PropTypes.string,
    apiKey: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    // console.log("1. News component constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=news&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    // console.log("3. cdm");
    this.updateNews();
  }

  handleNewsPagination = async (btn) => {
    console.log(btn);

    if (btn === "prev") {
      this.setState({ page: this.state.page - 1 });
      this.updateNews();
    } else if (btn === "next") {
      if (
        this.state.page + 1 <=
        Math.ceil(this.state.totalResults / this.props.pageSize)
      ) {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
      }
    }
  };

  render() {
    // console.log("2. render");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                    }
                    newsSource={
                      element.source.name ? element.source.name : "Explore"
                    }
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    newsDate={
                      element.publishedAt
                        ? new Date(element.publishedAt).toGMTString()
                        : ""
                    }
                    newsUrl={element.url ? element.url : ""}
                    newsAuthor={element.author ? element.author : "Unknown"}
                    badgeColor={this.props.badgeColor}
                  />
                </div>
              );
            })}
        </div>
        {!this.state.loading && (
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={() => {
                this.handleNewsPagination("prev");
              }}
            >
              &#8592; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={() => {
                this.handleNewsPagination("next");
              }}
            >
              Next &#8594;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
