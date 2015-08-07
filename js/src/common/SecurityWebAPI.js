import CasacasUser from './CasacasUser';

export default class SecurityWebAPI {

    static call({payload,dispatch}){
        return new Promise(function(resolve,reject){
          setTimeout(() => {
            if (payload.username == "gabriel"){
              let user = new CasacasUser({gabriel: payload.username, password: payload.password});
              resolve({result: user, dispatch: dispatch});
            }
            else {
              reject({result: 'error', dispatch: dispatch});
            }
          }
            ,4000);
        });
    }
}
