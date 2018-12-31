import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
import { Link } from "react-router-dom";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import ru from "date-fns/locale/ru";

class EventActivityItem extends Component {
  renderSummary = activity => {
    switch (activity.type) {
      case "newEvent":
        return (
          <div>
            Новое событие!{" "}
            <Feed.User
              as={Link}
              to={{ pathname: "/profile/" + activity.hostUid }}
            >
              {activity.hostedBy}
            </Feed.User>{" "}
            организатор{" "}
            <Link to={{ pathname: "/event/" + activity.eventId }}>
              {activity.title}
            </Link>
          </div>
        );
      case "cancelledEvent":
        return (
          <div>
            Событие отменено!{" "}
            <Feed.User
              as={Link}
              to={{ pathname: "/profile/" + activity.hostUid }}
            >
              {activity.hostedBy}
            </Feed.User>{" "}
            отменил{" "}
            <Link to={{ pathname: "/event/" + activity.eventId }}>
              {activity.title}
            </Link>
          </div>
        );
      default:
        return;
    }
  };

  render() {
    const { activity } = this.props;

    return (
      <Feed.Event>
        <Feed.Label>
          <img src={activity.photoURL || "/assets/user.png"} alt="" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>{this.renderSummary(activity)}</Feed.Summary>
          <Feed.Meta>
            <Feed.Date>
              {distanceInWordsToNow(activity.timestamp.toDate(), {
                locale: ru
              })}{" "}
              тому назад
            </Feed.Date>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default EventActivityItem;
