import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
});

type FormData = z.infer<typeof formSchema>;

interface WhatsAppLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppLeadModal = ({ isOpen, onClose }: WhatsAppLeadModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      telefone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyGuSQ6JmemchAJTftqQW9dYSSUJ2NmUWgZyRMNC_Vi16hoIed3LjpZcbGJBC6XTLtB/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast({
          title: "Dados enviados com sucesso!",
          description: "Sua condição especial foi garantida!",
        });
        
        // Fechar modal e redirecionar após um breve delay
        onClose();
        setTimeout(() => {
          window.open('https://bit.ly/idm_atendimento', '_blank');
        }, 1000);
      } else {
        throw new Error('Erro ao enviar dados');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar dados",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-idm-gold border-2">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-idm-navy text-center">
            Quase lá! Vamos nos conhecer?
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-idm-navy text-center">
            Para garantir os Bônus e Condição de Pagamento, preencha o Formulário.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-idm-navy font-medium">Nome completo *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome completo"
                        {...field}
                        className="border-idm-gold focus:border-idm-navy"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-idm-navy font-medium">Telefone com DDD *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(11) 99999-9999"
                        {...field}
                        className="border-idm-gold focus:border-idm-navy"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-idm-gold text-idm-navy hover:bg-[#1D6F4C] hover:text-white font-bold transition-colors duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Quero Garantir a Condição Especial
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};