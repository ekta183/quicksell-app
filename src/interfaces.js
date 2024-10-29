// Example structure for a Ticket
const Ticket = {
    id: '', // string
    title: '', // string
    tag: [], // array of strings
    userId: '', // string
    status: '', // string
    priority: 0 // number
};

// Example structure for a User
const User = {
    id: '', // string
    name: '', // string
    available: false // boolean
};

// Example structure for Col
const Col = {
    col: [] // array of Ticket objects
};

// Example structure for UserIdToData
const UserIdToData = {
    userData: {} // Record of string keys and User objects
};
