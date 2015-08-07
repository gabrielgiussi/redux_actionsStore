export default class AlertAPI {

    static call({payload,dispatch}){
        return new Promise(function(resolve,reject){
          setTimeout(() => {
            if (Math.random() > 0.5){
              resolve({result: 'Success', dispatch: dispatch});
            }
            else {
              reject({result: 'Error', dispatch: dispatch});
            }
          }
            ,4000);
        });
    }
}
