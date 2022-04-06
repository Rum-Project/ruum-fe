import { aliasQuery } from "../../src/Utils/graphql-test-utils"

describe('Error Handling Flow', () => {
  it('should adequately 404 error', () => {
    cy.visit('http://localhost:3000/fishMagoo')
      .get('.error-message').should('exist')
      .get('.error-gif').should('exist')
  })

  it('should handle situations with no bookings', () => {
    cy.intercept(
      'POST',
      'https://powerful-lake-27669.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getMusicianBookings', 'emptyBookingsFixture.json')
      }
    )
    cy.visit('http://localhost:3000/dashboard')
    .get('.bookings-error-message').should('have.text', "No Upcoming Bookings! How will you rehearse?!?!No past bookings! Book your first one today!")
  })

  it('should handle situations with no rooms', () => {
    cy.intercept(
      'POST',
      'https://powerful-lake-27669.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getAvailableRooms', 'emptyAvailableRoomsFixture.json')
      }
    )
      .visit('http://localhost:3000/search')
      .get('.results-error-message').should('have.text', 'Sorry, no rooms available that match your search! Consider being less picky!')
  })

  
})