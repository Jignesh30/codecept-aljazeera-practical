Feature: aljazeera

  Scenario: Test-Aljazeera
    Given I am on the homepage
    When I scroll to the "most read" section
    Then I should see the "MOST READ" text
    Then The "most read" section should have 10 posts
    Then Resize to Mobile Size and check for non-availability of "MOST READ"
    Then Check for the presence of "#most-read-container"

  Scenario: Test-LiveStream
    Given I am on live stream site
    Then Player should be visible
    Then Switch Player Text should be visible