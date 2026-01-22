<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BadgeCheck, Users, MapPin, Headphones, TrendingUp, Clock } from 'lucide-vue-next'

const features = [
  {
    icon: BadgeCheck,
    title: 'Auditor Certificati',
    description: 'I nostri auditor sono certificati AICQ/SICEV, Cepas e KHC, selezionati con rigorosa verifica di referenze, carriera ed esami.',
  },
  {
    icon: TrendingUp,
    title: 'Preparazione Elevata',
    description: 'Garantiamo preparazione elevata monitorando costantemente le prestazioni e gli aggiornamenti normativi.',
  },
  {
    icon: Users,
    title: 'Supporto Consulenti',
    description: 'Esperienza consolidata per supportare consulenti e professionisti del settore.',
  },
  {
    icon: MapPin,
    title: 'Rete Nazionale',
    description: 'Presenza capillare sul territorio nazionale per tempi rapidi e costi contenuti.',
  },
  {
    icon: Clock,
    title: 'Tempi Rapidi',
    description: 'Organizzazione efficiente per rispondere rapidamente alle esigenze dei clienti.',
  },
  {
    icon: Headphones,
    title: 'Front-Office Dedicato',
    description: 'Personale front-office dedicato per assistere i clienti in ogni fase del processo.',
  },
]
</script>

<template>
  <section id="perche-noi" class="py-20 bg-secondary/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <Badge variant="outline" class="mb-4">Perche Sceglierci</Badge>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Perche Ver.A. Cert
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ci distinguiamo per la qualita dei nostri auditor e l'efficienza del nostro servizio.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="feature in features" :key="feature.title" class="border-none shadow-none bg-transparent">
          <CardContent class="p-6">
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <component :is="feature.icon" class="h-7 w-7 text-primary" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-muted-foreground">{{ feature.description }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
