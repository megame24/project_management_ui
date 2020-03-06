# project_management_ui


### Deployed test ui on heroku
- link: https://test-proj-m-ui.herokuapp.com/
- Admin credentials (for testing purposes): email: `admin@projm.com`, password: `Adm1nP@ssw0rd`

### Installation

- Clone repo and navigate to root directory
```
git clone https://github.com/megame24/project_management_ui.git && cd project_management_ui
```
- Referencing the `.env-sample` file, create a `.env` file
- Install dependencies
```
npm install
```
- Run app
```
npm run dev
```

### Assumptions

The following are some of the assumptions and design decisions made while developing this application


- Same login route for admin and users, but only users can sign up. Admins are database seeded
- Users can't update created stories
- Users can only retrieve stories they created
- Admins can retrieve all stories in the application


### License

MIT