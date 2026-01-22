<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Globe,
  FileCheck,
  Award,
  Building2,
  Briefcase,
  ShieldCheck
} from 'lucide-vue-next'

const benefits = [
  {
    icon: Target,
    title: 'Chiarezza Organizzativa',
    description: 'Pianificazione e controllo efficace dei processi aziendali con ruoli e responsabilita ben definiti.'
  },
  {
    icon: TrendingUp,
    title: 'Riduzione dei Costi',
    description: 'Ottimizzazione delle risorse e riduzione degli sprechi attraverso processi standardizzati.'
  },
  {
    icon: Users,
    title: 'Soddisfazione del Cliente',
    description: 'Focus sul cliente e miglioramento continuo della qualita dei prodotti e servizi.'
  },
  {
    icon: Globe,
    title: 'Accesso ai Mercati Internazionali',
    description: 'Riconoscimento globale che apre le porte a nuove opportunita commerciali.'
  },
  {
    icon: FileCheck,
    title: 'Conformita Normativa',
    description: 'Rispetto dei requisiti legali e normativi applicabili al settore di riferimento.'
  },
  {
    icon: Award,
    title: 'Vantaggio Competitivo',
    description: 'Differenziazione sul mercato e maggiore credibilita verso clienti e partner.'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Definizione del Campo di Applicazione',
    description: 'Analisi preliminare per definire i processi e le attivita da includere nel sistema di gestione qualita.'
  },
  {
    step: 2,
    title: 'Pre-Audit (Opzionale)',
    description: 'Valutazione preliminare per identificare eventuali gap e prepararsi al meglio per l\'audit di certificazione.'
  },
  {
    step: 3,
    title: 'Audit di Certificazione - Fase 1',
    description: 'Verifica della documentazione del sistema di gestione e valutazione della preparazione all\'audit di Fase 2.'
  },
  {
    step: 4,
    title: 'Audit di Certificazione - Fase 2',
    description: 'Valutazione approfondita dell\'implementazione e dell\'efficacia del sistema di gestione qualita.'
  },
  {
    step: 5,
    title: 'Emissione del Certificato',
    description: 'Rilascio del certificato ISO 9001 con validita triennale in caso di esito positivo dell\'audit.'
  },
  {
    step: 6,
    title: 'Audit di Sorveglianza',
    description: 'Verifiche periodiche (annuali) per confermare il mantenimento della conformita del sistema.'
  },
  {
    step: 7,
    title: 'Rinnovo della Certificazione',
    description: 'Audit di rinnovo alla scadenza del triennio per confermare la certificazione per un nuovo periodo.'
  }
]

const sectors = [
  'Manifatturiero',
  'Servizi',
  'Commercio',
  'Costruzioni',
  'Sanita',
  'Trasporti',
  'ICT',
  'Alimentare'
]
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
      <div class="container mx-auto px-4">
        <Button variant="ghost" as="a" href="/#servizi" class="mb-6">
          <ArrowLeft class="mr-2 h-4 w-4" />
          Torna ai Servizi
        </Button>

        <div class="max-w-4xl">
          <Badge variant="secondary" class="mb-4">Certificazione Sistema di Gestione</Badge>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            ISO 9001
            <span class="text-primary"> Qualita</span>
          </h1>
          <p class="text-xl text-muted-foreground mb-8">
            La certificazione ISO 9001 rappresenta un importante fattore di successo per le organizzazioni
            che competono sui mercati globali. Implementando un sistema di gestione per la qualita,
            le aziende ottengono una gestione piu efficace delle risorse e dimostrano il loro impegno
            verso la soddisfazione del cliente.
          </p>
          <div class="flex flex-wrap gap-4">
            <Button size="lg" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Preventivo%20ISO%209001">
              Richiedi Preventivo
            </Button>
            <Button size="lg" variant="outline" as="a" href="#processo">
              Scopri il Processo
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- What is ISO 9001 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" class="mb-4">Cos'e la ISO 9001</Badge>
            <h2 class="text-3xl font-bold mb-6">
              Lo Standard Internazionale per la Gestione della Qualita
            </h2>
            <p class="text-muted-foreground mb-4">
              La norma ISO 9001 e lo standard internazionale che specifica i requisiti per un sistema
              di gestione per la qualita (SGQ). E applicabile a qualsiasi organizzazione, indipendentemente
              dalla dimensione o dal settore di attivita.
            </p>
            <p class="text-muted-foreground mb-6">
              L'obiettivo principale e garantire che l'organizzazione sia in grado di fornire con regolarita
              prodotti e servizi che soddisfano i requisiti del cliente e i requisiti cogenti applicabili,
              puntando al miglioramento continuo.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Applicabile a tutti i settori produttivi e di servizi</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Riconosciuta a livello internazionale</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Basata sul ciclo PDCA (Plan-Do-Check-Act)</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Integrazione con altri sistemi di gestione (ISO 14001, ISO 45001)</span>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-2xl flex items-center justify-center">
              <div class="text-center p-8">
                <ShieldCheck class="w-24 h-24 text-primary mx-auto mb-6" />
                <p class="text-3xl font-bold text-primary">ISO 9001:2015</p>
                <p class="text-muted-foreground">Quality Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16 bg-secondary/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Vantaggi</Badge>
          <h2 class="text-3xl font-bold mb-4">
            I Benefici della Certificazione ISO 9001
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            La certificazione porta vantaggi concreti e misurabili per la tua organizzazione.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="benefit in benefits" :key="benefit.title" class="hover:shadow-lg transition-shadow">
            <CardContent class="p-6">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <component :is="benefit.icon" class="h-6 w-6 text-primary" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ benefit.title }}</h3>
              <p class="text-muted-foreground">{{ benefit.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Certification Process -->
    <section id="processo" class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Il Percorso</Badge>
          <h2 class="text-3xl font-bold mb-4">
            Il Processo di Certificazione
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ti accompagniamo in ogni fase del percorso verso la certificazione ISO 9001.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="item in processSteps"
              :key="item.step"
              class="flex gap-4 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
            >
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                {{ item.step }}
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-muted-foreground">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who is it for -->
    <section class="py-16 bg-primary text-primary-foreground">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" class="mb-4">A Chi si Rivolge</Badge>
          <h2 class="text-3xl font-bold mb-6">
            La ISO 9001 e per Tutti i Settori
          </h2>
          <p class="text-lg text-primary-foreground/80 mb-8">
            Tutti i settori produttivi, di servizio e commerciali hanno l'esigenza di operare
            in qualita per soddisfare requisiti contrattuali e norme tecniche, restando competitivi
            in un contesto internazionale in continua evoluzione.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <Badge
              v-for="sector in sectors"
              :key="sector"
              variant="secondary"
              class="text-sm px-4 py-2"
            >
              <Briefcase class="h-4 w-4 mr-2" />
              {{ sector }}
            </Badge>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contatti" class="py-16">
      <div class="container mx-auto px-4">
        <Card class="max-w-3xl mx-auto">
          <CardContent class="p-8 text-center">
            <Building2 class="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 class="text-2xl font-bold mb-4">
              Vuoi Certificare la Tua Azienda?
            </h2>
            <p class="text-muted-foreground mb-6">
              Contattaci per una consulenza gratuita. I nostri auditor certificati ti guideranno
              nel percorso verso la certificazione ISO 9001.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Informazioni%20ISO%209001">
                Richiedi Informazioni
              </Button>
              <Button size="lg" variant="outline" as="a" href="tel:+393497478611">
                Chiama Ora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
