import CartTable from "@/components/CartTable";
import {
  Table,
  TableBody, TableHead, TableRow
} from "@/components/ui/table";


export default function TableDemo() {

  return (
    <>
      <CartTable />

      <div className="mx-8 p-8 bg-white rounded-2xl flex justify-between">
        <div className="flex flex-col gap-8">
          <div className="">Choisir ton mode de paiement :</div>
          <div className="flex gap-2 mx-4">
            <input type="radio" className="checked:bg-primary rounded-full size-6" name="shopping" checked />
            Au magazin (en 20 min) ■ <b>FREE</b>
          </div>
          <div className="flex gap-2 mx-4">
          <input type="radio" className="checked:bg-primary rounded-full size-6" name="shopping"  />
          Livraison (environ 2 jours) <b>FREE</b>
          </div>
        </div>
        <div className="">
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>SUBTOTAL TTC</TableHead>

                <TableHead className="text-right text-xl  font-bold">
                  1.000.000.00 FCFA
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>SHOPPING</TableHead>

                <TableHead className="text-right text-xl  font-bold">
                  Free
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>TOTAL</TableHead>

                <TableHead className="text-right text-xl  font-bold">
                  1.000.000.00 FCFA
                </TableHead>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-between items-center bg-primary p-4 rounded-2xl">
           Checkout
             <div className="font-bold italic">1.000.000.000.000 FCFA</div>
          </div>
        </div>
      </div>
    </>
  );
}
