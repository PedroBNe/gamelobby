/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Money from '@/assets/money (1).png';
import Bar from '@/assets/barcode.png';
import Paypal from '@/assets/paypal (1).png';
import Cred from '@/assets/credit-card.png';
import Image from "next/image";
import Ask from "@/assets/ask";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const Card = ({titulo, texto}: any ) => {
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="absolute right-5"><Ask /></button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{titulo}</AlertDialogTitle>
                <AlertDialogDescription>
                    {texto}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction>Ok</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default function Page() {
    return(
        <div className="w-full h-full p-10 flex flex-col items-center justify-between">
            <h2 className="text-3xl font-semibold">Pagamento</h2>
            <div className="w-[80%] h-full flex justify-between items-center">
                <div>
                    <h3>Método de Pagamento</h3>
                    <form className="w-[400px] flex flex-col gap-3 p-4">
                        <div className="border-[1px] border-r-[3px] border-b-[3px] p-2 border-slate-200 flex gap-3 items-center relative">
                            <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" />
                            <Image src={Money} alt="money" width={40} />
                            Pix
                            <Card titulo="Pix" texto="Pagamento aprovado na hora. Você poderá finalizar o seu Pix por meio do QR Code ou código no banco que preferir! Mas fique atento, este código só será válido por 4 horas. Esta é uma compra internacional, sujeita a uma operação de câmbio, que será processada pelo DLOCAL de acordo com seus termos e condições. Ao clicar em comprar, você dá ciência e aceita os termos desta transação."/>
                        </div>
                        <div className="border-[1px] border-r-[3px] border-b-[3px] p-2 border-slate-200 flex gap-3 items-center relative">
                            <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" /> 
                            <Image src={Bar} alt="money" width={40} />
                            Boleto Bancário
                            <Card titulo="Boleto Bancário" texto="O prazo de validade do seu boleto é de até 3 dias úteis, você pode imprimir e pagar no banco ou utilizar o código que será enviado para o email cadastrado para pagar pela internet. Após o pagamento, o status do seu pedido será atualizado também em até 3 dias úteis (o tempo de atualização pode ser maior durante feriados). Além disso, você precisa ter 16 anos ou mais para que a sua compra seja autorizada.Esta é uma compra internacional, sujeita a uma operação de câmbio, que será processada pelo DLOCAL de acordo com seus termos e condições. Ao clicar em comprar, você dá ciência e aceita os termos desta transação.O boleto não permite reembolsos através do mesmo método de pagamento."/>
                        </div>
                        <div className="border-[1px] border-r-[3px] border-b-[3px] p-2 border-slate-200 flex gap-3 items-center relative"> 
                            <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" />
                            <Image src={Cred} alt="money" width={40} />
                            Cartão de Crédito
                            <Card titulo="Cartão de Crédito" texto="Parcelamento de 1-10x com juros do cartão. Aceitamos cartões Visa, MasterCard, Elo, HiperCard, American Express e Diners Club."/>
                        </div>
                        <div className="border-[1px] border-r-[3px] border-b-[3px] p-2 border-slate-200 flex gap-3 items-center relative">
                            <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" />
                            <Image src={Paypal} alt="money" width={40} />
                            PayPal
                            <Card titulo="PayPal" texto="Ao fazer um pedido pelo PayPal, você será redirecionado para a página de pagamento do PayPal para confirmar seu pagamento, fazendo login com seu nome de usuário e senha do PayPal.
                            Você ainda poderá fazer o pagamento mesmo sem uma conta do PayPal. Para isso, clique em “Pagar com cartão de débito/crédito” para ser redirecionado a uma página segura onde você poderá inserir as informações do seu cartão de crédito ou concluir o pagamento com segurança via PayPal."/>
                        </div>
                        <Button variant={'verde'}>submit</Button>
                    </form>
                </div>
                <div className="w-[500px]">
                    <div className="border-[1px] border-r-[3px] border-b-[3px] p-4">
                        <Table className="w-full">
                            <TableCaption>Valor final: $2853,94</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[150px]">Produtos</TableHead>
                                    <TableHead>Quantidade</TableHead>
                                    <TableHead>Descontos</TableHead>
                                    <TableHead className="text-right">Custos</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="w-full">
                                <TableRow>
                                    <TableCell className="font-medium">Jogo da memoria</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell>- $32.02</TableCell>
                                    <TableCell className="text-right">$2450.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Brindes</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>- $32.02</TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Leads</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>- $32.02</TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow className="bg-slate-100">
                                    <TableCell className="font-medium">Total</TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>- $96.06</TableCell>
                                    <TableCell className="text-right">$2950.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}