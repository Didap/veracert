<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-vue-next'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Il messaggio deve avere almeno 10 caratteri'),
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validateField = (field: keyof typeof form.value) => {
  try {
    const fieldSchema = formSchema.shape[field]
    fieldSchema.parse(form.value[field])
    errors.value[field] = ''
  } catch (e) {
    if (e instanceof z.ZodError) {
      errors.value[field] = e.errors[0]?.message || ''
    }
  }
}

const handleSubmit = async () => {
  try {
    formSchema.parse(form.value)
    errors.value = {}
    isSubmitting.value = true

    await new Promise(resolve => setTimeout(resolve, 1000))

    isSubmitted.value = true
    form.value = { name: '', email: '', phone: '', company: '', message: '' }
  } catch (e) {
    if (e instanceof z.ZodError) {
      e.errors.forEach(err => {
        if (err.path[0]) {
          errors.value[err.path[0] as string] = err.message
        }
      })
    }
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = [
  { icon: Phone, label: 'Telefono', value: '+39 349 747 8611' },
  { icon: Mail, label: 'Email', value: 'veracertsrls@gmail.com' },
  { icon: MapPin, label: 'Sede', value: 'Via Puglie, 1 - 72027 San Pietro Vernotico (BR)' },
]
</script>

<template>
  <section id="contatti" class="py-20 bg-secondary/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <Badge variant="outline" class="mb-4">Contatti</Badge>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Richiedi Informazioni
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compila il modulo per richiedere un preventivo o maggiori informazioni
          sui nostri servizi di auditing e certificazione.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="lg:col-span-2">
          <Card>
            <CardContent class="p-6">
              <div v-if="isSubmitted" class="text-center py-8">
                <CheckCircle2 class="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 class="text-xl font-semibold mb-2">Messaggio Inviato!</h3>
                <p class="text-muted-foreground mb-4">
                  Grazie per averci contattato. Ti risponderemo al piu presto.
                </p>
                <Button @click="isSubmitted = false" variant="outline">
                  Invia un altro messaggio
                </Button>
              </div>

              <form v-else @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <Label for="name">Nome e Cognome *</Label>
                    <Input
                      id="name"
                      v-model="form.name"
                      placeholder="Mario Rossi"
                      @blur="validateField('name')"
                      :class="errors.name ? 'border-destructive' : ''"
                    />
                    <p v-if="errors.name" class="text-sm text-destructive">{{ errors.name }}</p>
                  </div>

                  <div class="space-y-2">
                    <Label for="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      v-model="form.email"
                      placeholder="mario.rossi@esempio.it"
                      @blur="validateField('email')"
                      :class="errors.email ? 'border-destructive' : ''"
                    />
                    <p v-if="errors.email" class="text-sm text-destructive">{{ errors.email }}</p>
                  </div>

                  <div class="space-y-2">
                    <Label for="phone">Telefono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      v-model="form.phone"
                      placeholder="+39 000 000 0000"
                    />
                  </div>

                  <div class="space-y-2">
                    <Label for="company">Azienda</Label>
                    <Input
                      id="company"
                      v-model="form.company"
                      placeholder="Nome Azienda"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <Label for="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    v-model="form.message"
                    placeholder="Descrivi le tue esigenze..."
                    :rows="5"
                    @blur="validateField('message')"
                    :class="errors.message ? 'border-destructive' : ''"
                  />
                  <p v-if="errors.message" class="text-sm text-destructive">{{ errors.message }}</p>
                </div>

                <Button type="submit" size="lg" :disabled="isSubmitting" class="w-full md:w-auto">
                  <Send class="mr-2 h-4 w-4" />
                  {{ isSubmitting ? 'Invio in corso...' : 'Invia Messaggio' }}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div class="space-y-6">
          <Card v-for="info in contactInfo" :key="info.label">
            <CardContent class="p-6 flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <component :is="info.icon" class="h-6 w-6 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">{{ info.label }}</p>
                <p class="font-medium">{{ info.value }}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="p-0">
              <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div class="text-center p-6">
                  <MapPin class="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p class="text-sm text-muted-foreground">Mappa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
