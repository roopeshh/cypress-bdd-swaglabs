Feature: Login to Swag Labs
  
  @login
  Scenario Outline: Valid Login
    Given I open Swag Labs page
    Then I am in the login page
    When I login with username <username> and password <password>
    Then I should be logged in

  Examples:
    | username                 | password      |
    | standard_user            | secret_sauce  |
    | problem_user             | secret_sauce  |
    | performance_glitch_user  | secret_sauce  |

  @login
  Scenario: Login to Swag Labs with locked out user
    Given I open Swag Labs page
    Then I am in the login page
    When I login with username locked_out_user and password secret_sauce
    Then I should get error message "Epic sadface: Sorry, this user has been locked out."

  @login
  Scenario: Invalid user login
    Given I open Swag Labs page
    Then I am in the login page
    When I login with username invalid_user and password secret_sauce
    Then I should get error message "Epic sadface: Username and password do not match any user in this service"