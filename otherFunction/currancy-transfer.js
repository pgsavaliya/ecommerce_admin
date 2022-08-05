import cc from "currency-converter-lt";

 export async function currencyConverter(fromCountry, toCountry, ammount) {
      const ccInstance = new cc({ from: fromCountry, to: toCountry });
      return await ccInstance.convert(ammount)
}
// const main   = async () => {
//     console.log(await currencyConverter("ILS", "INR", 500));
// }

// main()
