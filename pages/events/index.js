import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events/event-list'
import EventSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage(){
    const events= getAllEvents();
    const router=useRouter();
    function findEventsHandler(year , month) {
        const fullPath=`/events/${year}/${month}`
        router.push(fullPath);
    }
    return <Fragment>
        <EventSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
    </Fragment>
}

export default AllEventsPage