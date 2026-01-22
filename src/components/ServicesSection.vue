<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ClipboardCheck, Award, Users, Building2, FileCheck, UserCheck } from 'lucide-vue-next'

interface BadgeItem {
  label: string
  link?: string
}

interface Service {
  icon: typeof ClipboardCheck
  title: string
  description: string
  badges: BadgeItem[]
}

const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: 'Audit di Certificazione',
    description: 'Audit di 3a parte in partnership con Organismi di Certificazione Accreditati per tutti gli schemi e settori.',
    badges: [
      { label: 'ISO 9001', link: '/certificazioni/iso-9001' },
      { label: 'ISO 14001', link: '/certificazioni/iso-14001' },
      { label: 'ISO 45001', link: '/certificazioni/iso-45001' }
    ],
  },
  {
    icon: Building2,
    title: 'Audit Interni (1a Parte)',
    description: 'Verifica interna del sistema di gestione per garantire conformita e identificare opportunita di miglioramento.',
    badges: [
      { label: 'Sistemi di Gestione' },
      { label: 'Compliance' }
    ],
  },
  {
    icon: UserCheck,
    title: 'Audit Fornitori (2a Parte)',
    description: 'Valutazione di fornitori, subappaltatori e outsourcer per garantire la qualita della catena di fornitura.',
    badges: [
      { label: 'Supply Chain' },
      { label: 'Qualifica Fornitori' }
    ],
  },
  {
    icon: Award,
    title: 'Certificazioni Prodotto',
    description: 'Supporto alla certificazione di prodotti secondo norme tecniche e standard volontari di settore.',
    badges: [
      { label: 'Marcatura CE' },
      { label: 'Certificazioni Volontarie' }
    ],
  },
  {
    icon: FileCheck,
    title: 'Certificazioni Servizi',
    description: 'Accompagnamento nella certificazione di servizi per dimostrare qualita e affidabilita ai clienti.',
    badges: [
      { label: 'Service Quality' },
      { label: 'Standard di Settore' }
    ],
  },
  {
    icon: Users,
    title: 'Formazione',
    description: 'Corsi specifici su sistemi di gestione, prodotti, servizi e adempimenti normativi per il personale aziendale.',
    badges: [
      { label: 'Auditor' },
      { label: 'Lead Auditor' },
      { label: 'Normative' }
    ],
  },
]
</script>

<template>
  <section id="servizi" class="py-20 bg-secondary/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <Badge variant="outline" class="mb-4">I Nostri Servizi</Badge>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Soluzioni Complete per la Certificazione
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Offriamo una gamma completa di servizi di auditing, certificazione e formazione
          per supportare le aziende nel raggiungimento dell'eccellenza.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="service in services" :key="service.title" class="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <component :is="service.icon" class="h-6 w-6 text-primary" />
            </div>
            <CardTitle class="text-xl">{{ service.title }}</CardTitle>
            <CardDescription>{{ service.description }}</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <template v-for="badge in service.badges" :key="badge.label">
                <RouterLink v-if="badge.link" :to="badge.link">
                  <Badge variant="secondary" class="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {{ badge.label }}
                  </Badge>
                </RouterLink>
                <Badge v-else variant="secondary">
                  {{ badge.label }}
                </Badge>
              </template>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
