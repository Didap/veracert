<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  CheckCircle2,
  Leaf,
  TrendingDown,
  Recycle,
  Globe,
  FileCheck,
  Award,
  Building2,
  TreePine,
  Factory
} from 'lucide-vue-next'

const benefits = [
  {
    icon: Leaf,
    title: 'Controllo Impatti Ambientali',
    description: 'Identificazione, monitoraggio e riduzione degli impatti ambientali delle attivita aziendali.'
  },
  {
    icon: TrendingDown,
    title: 'Riduzione dei Costi',
    description: 'Efficienza nella gestione delle risorse, riduzione di sprechi, energia e costi di smaltimento rifiuti.'
  },
  {
    icon: Recycle,
    title: 'Gestione Sostenibile',
    description: 'Ottimizzazione dell\'uso di materie prime e riduzione dell\'impatto ambientale dei processi.'
  },
  {
    icon: Globe,
    title: 'Mercati Internazionali',
    description: 'Accesso ai mercati globali sempre piu attenti alla sostenibilita ambientale.'
  },
  {
    icon: FileCheck,
    title: 'Conformita Normativa',
    description: 'Semplificazione della conformita alle normative ambientali nazionali e internazionali.'
  },
  {
    icon: Award,
    title: 'Reputazione Aziendale',
    description: 'Miglioramento dell\'immagine presso istituzioni, consumatori e stakeholder.'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Definizione dello Scopo Certificativo',
    description: 'Analisi delle attivita aziendali per definire il perimetro del sistema di gestione ambientale.'
  },
  {
    step: 2,
    title: 'Pre-Audit (Facoltativo)',
    description: 'Diagnosi preliminare per identificare gap e aree di miglioramento prima dell\'audit ufficiale.'
  },
  {
    step: 3,
    title: 'Audit di Certificazione - Fase 1',
    description: 'Verifica della documentazione e della preparazione dell\'organizzazione.'
  },
  {
    step: 4,
    title: 'Audit di Certificazione - Fase 2',
    description: 'Valutazione dell\'implementazione effettiva del sistema di gestione ambientale.'
  },
  {
    step: 5,
    title: 'Emissione del Certificato',
    description: 'Rilascio del certificato ISO 14001 con validita triennale.'
  },
  {
    step: 6,
    title: 'Audit di Sorveglianza',
    description: 'Verifiche annuali per confermare il mantenimento della conformita.'
  },
  {
    step: 7,
    title: 'Rinnovo della Certificazione',
    description: 'Audit di rinnovo alla scadenza dei tre anni per un nuovo ciclo certificativo.'
  }
]

const sectors = [
  'Manifatturiero',
  'Chimico',
  'Energia',
  'Costruzioni',
  'Trasporti',
  'Alimentare',
  'Servizi',
  'Pubblico'
]
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-green-500/5 via-background to-secondary/20">
      <div class="container mx-auto px-4">
        <Button variant="ghost" as="a" href="/#servizi" class="mb-6">
          <ArrowLeft class="mr-2 h-4 w-4" />
          Torna ai Servizi
        </Button>

        <div class="max-w-4xl">
          <Badge variant="secondary" class="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            Certificazione Sistema di Gestione
          </Badge>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            ISO 14001
            <span class="text-green-600 dark:text-green-400"> Ambiente</span>
          </h1>
          <p class="text-xl text-muted-foreground mb-8">
            La certificazione ISO 14001 specifica i requisiti per un sistema di gestione ambientale
            efficace. Applicabile a qualsiasi organizzazione, pubblica o privata, che desidera
            migliorare le proprie prestazioni ambientali.
          </p>
          <div class="flex flex-wrap gap-4">
            <Button size="lg" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Informazioni%20ISO%2014001" class="bg-green-600 hover:bg-green-700">
              Richiedi Preventivo
            </Button>
            <Button size="lg" variant="outline" as="a" href="#processo">
              Scopri il Processo
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- What is ISO 14001 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" class="mb-4">Cos'e la ISO 14001</Badge>
            <h2 class="text-3xl font-bold mb-6">
              Lo Standard per la Gestione Ambientale
            </h2>
            <p class="text-muted-foreground mb-4">
              La norma ISO 14001 e lo standard internazionale che definisce i requisiti per un
              sistema di gestione ambientale (SGA). Fornisce un quadro di riferimento per proteggere
              l'ambiente e rispondere alle mutevoli condizioni ambientali.
            </p>
            <p class="text-muted-foreground mb-6">
              L'obiettivo e aiutare le organizzazioni a migliorare le prestazioni ambientali
              attraverso un uso piu efficiente delle risorse e la riduzione degli sprechi,
              ottenendo un vantaggio competitivo e la fiducia degli stakeholder.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Applicabile a tutte le organizzazioni, pubbliche e private</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Accesso a finanziamenti e agevolazioni ambientali</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Vantaggi nelle gare d'appalto pubbliche e private</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Riduzione delle fideiussioni negli appalti pubblici</span>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-green-500/20 to-green-100 dark:to-green-900/30 rounded-2xl flex items-center justify-center">
              <div class="text-center p-8">
                <TreePine class="w-24 h-24 text-green-600 mx-auto mb-6" />
                <p class="text-3xl font-bold text-green-600">ISO 14001:2015</p>
                <p class="text-muted-foreground">Environmental Management System</p>
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
            I Benefici della Certificazione ISO 14001
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            La certificazione ambientale porta vantaggi economici, reputazionali e competitivi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="benefit in benefits" :key="benefit.title" class="hover:shadow-lg transition-shadow">
            <CardContent class="p-6">
              <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <component :is="benefit.icon" class="h-6 w-6 text-green-600" />
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
            Ti accompagniamo in ogni fase del percorso verso la certificazione ISO 14001.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="item in processSteps"
              :key="item.step"
              class="flex gap-4 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
            >
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
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
    <section class="py-16 bg-green-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" class="mb-4">A Chi si Rivolge</Badge>
          <h2 class="text-3xl font-bold mb-6">
            Per Tutte le Organizzazioni
          </h2>
          <p class="text-lg text-white/80 mb-8">
            Qualsiasi organizzazione, indipendentemente dal settore o dalla dimensione,
            puo implementare e certificare un sistema di gestione ambientale conforme
            alla ISO 14001.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <Badge
              v-for="sector in sectors"
              :key="sector"
              variant="secondary"
              class="text-sm px-4 py-2"
            >
              <Factory class="h-4 w-4 mr-2" />
              {{ sector }}
            </Badge>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <Card class="max-w-3xl mx-auto">
          <CardContent class="p-8 text-center">
            <Building2 class="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 class="text-2xl font-bold mb-4">
              Vuoi Certificare la Tua Azienda?
            </h2>
            <p class="text-muted-foreground mb-6">
              Contattaci per una consulenza gratuita. I nostri auditor certificati ti guideranno
              nel percorso verso la certificazione ISO 14001.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Informazioni%20ISO%2014001" class="bg-green-600 hover:bg-green-700">
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
