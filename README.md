# Contacts
Use this Rails with React-Redux application to organize your contacts in one single page! Contacts has a custom API containing user-generated social groups and contacts. The API is generated with the Fast JSON gem to accelerate serialization. The React-Redux frontend creates and displays the application in a single, dynamic page, and communicates with the Rails backend models and controllers to parse and validate group/contact objects. This app is fortified with a Rack-CORS middleware to provide support for cross-origin resource sharing.

## Getting Started
### Prerequisites
This app is run with Ruby and Javascript. Please have both libraries installed before beginning.

Fork and clone the backend and frontend repositories (linked below) onto your terminal.

https://github.com/cTraymany/contacts-backend
https://github.com/cTraymany/contacts-frontend

### Installing
    <!-- Backend -->
    $ bundle install
    $ rake db:migrate
    $ rails s

    <!-- Frontend -->
    $ npm start

    You will be prompted to start in a new server. Enter 'Y' and the application will be opened in the browser. Otherwise, proceed with the link provided in the terminal.

### Built With
[VS Code](https://code.visualstudio.com/) - text editor

### Contributing
See CONTRIBUTING.md for details on code of conduct.

### Authors
Chindalath Traymany - cTraymany

### License
This project is licensed under the MIT License - see LICENSE.md for details