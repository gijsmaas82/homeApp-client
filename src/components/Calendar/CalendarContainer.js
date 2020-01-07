import React from "react";
import moment from "moment";
import Calendar from './Calendar'
import { url } from '../../constants'
import request from 'superagent'
import { connect } from 'react-redux'
import { getFavoritePhotos, getUserDrawings } from '../../actions'


class CalendarContainer extends React.Component {

  state = {
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    selectedDay: moment().format('D'),
    events: [],
    addEvent: false,
    showEvents: false,
    showPictures: false,
    picture: ''
  }

  showMonth = () => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    })
  }

  setMonth = month => {
    let monthNo = moment.months().indexOf(month)
    let dateObject = Object.assign({}, this.state.dateObject)
    dateObject = moment(dateObject).set("month", monthNo)
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    })
  }


  onPrev = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, "month")
    });
  };

  onNext = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, "month")
    });
  }

  onPrevYear = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, "year"),
      showMonthTable: true,
      showDateTable: false
    });

  };

  onNextYear = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, "year"),
      showMonthTable: true,
      showDateTable: false
    });
  }

  onDayClick = (e, d) => {
    if (this.props.user) {
      this.setState(
        {
          selectedDay: d
        },
        () => {
          request
            .get(`${url}/event/${this.state.dateObject.format("Y")}/${this.state.dateObject.format("MM")}/${this.state.selectedDay}`)
            .set('Authorization', `Bearer ${this.props.user.jwt}`)
            .then(response => {
              this.setState({
                events: response.body
              })})
            .catch(console.error)
        }
      )
    }
  }

  deleteEvent = (e) => {
    request.delete(`${url}/event/${e.currentTarget.dataset.eventid}`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .then(response => {
        this.showEvents()
        })
      .catch(console.error)

  }

  showEvents = () => {
    request
      .get(`${url}/event/${this.state.dateObject.format("Y")}/${this.state.dateObject.format("MM")}/${Number(this.state.dateObject.format("D"))}`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .then(response => {
        this.setState({
          events: response.body,
          showEvents: !this.state.showEvents
        })})
      .catch(console.error)
  }

  login = () => {
    this.props.history.push('/profile')
  }

  promptPictures = () => {
    this.props.getFavoritePhotos(this.props.user.jwt)
    this.setState({ 
      showPictures: true,
    })
  }

  useFavoritePhoto = (e) => {
    this.setState({
      picture: e.currentTarget.dataset.picture,
      showPictures: false,
    })

  }

  componentDidMount() {

    if (this.props.user) {
      request
        .get(`${url}/event/${this.state.dateObject.format("Y")}/${this.state.dateObject.format("MM")}/${Number(this.state.dateObject.format("D"))}`)
        .set('Authorization', `Bearer ${this.props.user.jwt}`)
        .then(response => {
          this.setState({
            events: response.body
          })})
        .catch(console.error)
    }
  }

  render() {

    return (
      <div>
        <Calendar 
          onPrev={this.onPrev}
          showMonthTable={this.state.showMonthTable}
          showMonth={this.showMonth}
          onNext={this.onNext}
          showDateTable={this.state.showDateTable}
          dateObject={this.state.dateObject}
          onDayClick={this.onDayClick}
          setMonth={this.setMonth}
          onPrevYear={this.onPrevYear}
          onNextYear={this.onNextYear}
          deleteEvent={this.deleteEvent}
          deletedEvent={this.deletedEvent}
          events={this.state.events}
          deletingEvent={this.state.deletingEvent}
          selectedDay={this.state.selectedDay}
          user={this.props.user}
          login={this.login}
          showEvents={this.showEvents}
          promptPictures={this.promptPictures}
          showPictures={this.state.showPictures}
          favoritePhotos={this.props.favoritePhotos}
          useFavoritePhoto={this.useFavoritePhoto}
          picture={this.state.picture}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    favoritePhotos: state.favoritePhotos,
    userDrawings: state.userDrawings
  }
}

const mapDispatchToProps = {
  getFavoritePhotos,
  getUserDrawings
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)
