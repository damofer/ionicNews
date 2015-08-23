angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Restaurante',
    lastText: 'Nuestro menú',
    face: 'img/icons/services/icono_restaurante.jpg',
    large_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img_url:'img/services/restaurante.jpg',
    schedule:'HORARIO TODOS LOS DIAS 6-10PM'
  }, {
    id: 1,
    name: 'Bar',
    lastText: 'Embriagate acá',
    face: 'img/icons/services/icono_bar.jpg',
    large_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img_url:'img/services/bar.jpg',
    schedule:'HORARIO TODOS LOS DIAS 6-10PM'
  }, {
    id: 2,
    name: 'Catering',
    lastText: 'Nuestro menú',
    face: 'img/icons/services/icono_catering.jpg',
    large_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     img_url:'img/services/catering.jpg',
    schedule:'HORARIO TODOS LOS DIAS 6-10PM'
  }, {
    id: 3,
    name: 'Eventos',
    lastText: 'Nuestro menú',
    face: 'img/icons/services/icono_eventos.jpg',
    large_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     img_url:'img/services/eventos.jpg',
    schedule:'HORARIO TODOS LOS DIAS 6-10PM'
  }, {
    id: 4,
    name: 'Miscelánea',
    lastText: 'Nuestro menú',
    face: 'img/icons/services/icono_miscelanea.jpg',
    large_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     img_url:'img/services/miscelanea.jpg',
    schedule:'HORARIO TODOS LOS DIAS 6-10PM'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
