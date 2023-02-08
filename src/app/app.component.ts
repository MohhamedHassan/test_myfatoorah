import { Component } from '@angular/core';
import { MyFatoorah,validateSignature  } from 'myfatoorah-toolkit'
// import * as CryptoJS from 'crypto-js'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-packages';
  ngOnInit(): void {
    let baseURL = "https://apitest.myfatoorah.com";
    let token = "rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL";
     let directPaymentToken = 'fVysyHHk25iQP4clu6_wb9qjV3kEq_DTc1LBVvIwL9kXo9ncZhB8iuAMqUHsw-vRyxr3_jcq5-bFy8IN-C1YlEVCe5TR2iCju75AeO-aSm1ymhs3NQPSQuh6gweBUlm0nhiACCBZT09XIXi1rX30No0T4eHWPMLo8gDfCwhwkbLlqxBHtS26Yb-9sx2WxHH-2imFsVHKXO0axxCNjTbo4xAHNyScC9GyroSnoz9Jm9iueC16ecWPjs4XrEoVROfk335mS33PJh7ZteJv9OXYvHnsGDL58NXM8lT7fqyGpQ8KKnfDIGx-R_t9Q9285_A4yL0J9lWKj_7x3NAhXvBvmrOclWvKaiI0_scPtISDuZLjLGls7x9WWtnpyQPNJSoN7lmQuouqa2uCrZRlveChQYTJmOr0OP4JNd58dtS8ar_8rSqEPChQtukEZGO3urUfMVughCd9kcwx5CtUg2EpeP878SWIUdXPEYDL1eaRDw-xF5yPUz-G0IaLH5oVCTpfC0HKxW-nGhp3XudBf3Tc7FFq4gOeiHDDfS_I8q2vUEqHI1NviZY_ts7M97tN2rdt1yhxwMSQiXRmSQterwZWiICuQ64PQjj3z40uQF-VHZC38QG0BVtl-bkn0P3IjPTsTsl7WBaaOSilp4Qhe12T0SRnv8abXcRwW3_HyVnuxQly_OsZzZry4ElxuXCSfFP2b4D2-Q';
 
     
      //const payment = new MyFatoorah(countryIso, testMode, apiKey?)
      // example
      const payment = new MyFatoorah('EGY', true);
     
      // example
      //const payment = new MyFatoorah('EGY', false, process.env.PAYMENT_TOKEN);
      
      //payment.initiatePayment(amount, currencyISOCode)
      
      // example:
      payment.initiatePayment(100).then((data:any) => data).catch(err => err);
      
      // example for a different currency:
      //payment.initiatePayment(100, 'SAR').then((data) => data).catch(err => err);
  
  
      //payment.sendPayment(invoiceValue, customerName, notificationOption, _data?);
  
        // available notification options:
        // 'EML' | 'SMS' | 'LNK' | 'ALL'
  
        // example:
        payment.sendPayment(500, 'Kareem', 'EML').then((data) => data).catch(err => err);
      
      // example with customer data:
      payment.executePayment(1000, 11, {
        CustomerName: "fname lname",
        DisplayCurrencyIso: "KWD",
        MobileCountryCode: "965",
        CustomerMobile: "12345678",
        CustomerEmail: "mail@company.com",
      }).then((data) => data).catch(err => err);
  
      //payment.getPaymentStatus(key, keyType)
  
  // available keyTypes for payment inquiry
  // 'InvoiceId' | 'PaymentId' | 'CustomerReference'
  
  // example:
  payment.getPaymentStatus('613842', 'InvoiceId').then((data) => data).catch(err => err);
     
/*payment.getRefundStatus(key, keyType);

// available keyTypes for Refund status
// 'InvoiceId' | 'RefundReference' | 'RefundId';

payment.getRefundStatus('1647850', 'InvoiceId')
.then((data) => data).catch(err => err);*/
  }
}
