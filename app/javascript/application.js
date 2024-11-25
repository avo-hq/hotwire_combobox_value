// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { Application } from "@hotwired/stimulus"
import HwComboboxController from '@josefarias/hotwire_combobox'

const application = Application.start()

// Add the following two lines:
application.register("hw-combobox", HwComboboxController)

export { application }
