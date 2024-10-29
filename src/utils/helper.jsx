import Backlog from '../icons/Backlog.svg'
import Todo from '../icons/To-do.svg'
import inProcess from '../icons/in-progress.svg'
import done from '../icons/Done.svg'
import cancel from '../icons/Cancelled.svg'
import noProirity from '../icons/No-priority.svg'
import low from '../icons/Img - Low Priority.svg'
import medium from '../icons/Img - Medium Priority.svg'
import high from '../icons/Img - High Priority.svg'
import urgent from '../icons/SVG - Urgent Priority colour.svg'
import urgetntGray from '../icons/SVG - Urgent Priority grey.svg'

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={noProirity} alt="" /> ;
        case "Low": return <img src={low} alt="" />;
        case "Medium": return <img src={medium} alt="" />;
        case "High": return <img src={high} alt="" />;
        case "Urgent": return <img src={urgent} alt="" />;
        default: return <img src={urgetntGray} alt="" />;
    }
};

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src={Backlog} alt="" />;
        case "Todo": return <img src={Todo} alt="" />;
        case "In progress": return <img src={inProcess} alt="" />;
        case "Done": return <img src={done} alt="" />;
        case "Canceled": return <img src={cancel} alt="" />;
        default: return <img src={cancel} alt="" />;
    }
};
