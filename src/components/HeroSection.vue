<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield, Award, GraduationCap } from 'lucide-vue-next'
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
    <div class="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" class="mb-6">
          Auditor Certificati AICQ/SICEV, Cepas, KHC
        </Badge>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Certificazioni, Auditing
          <span class="text-primary"> e Formazione</span>
        </h1>

        <p class="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ver.A. Cert offre servizi professionali di auditing, certificazioni e formazione
          su sistemi di gestione, prodotti e servizi. Esperienza pluriennale al vostro servizio.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" as="a" href="#contatti">
            Contattaci
            <ArrowRight class="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" as="a" href="#servizi">
            Scopri i Servizi
          </Button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div class="flex items-center justify-center gap-3 p-4 rounded-lg bg-card border">
            <Shield class="h-8 w-8 text-primary" />
            <div class="text-left">
              <p class="font-semibold">Auditing</p>
              <p class="text-sm text-muted-foreground">1a, 2a e 3a parte</p>
            </div>
          </div>
          <div class="flex items-center justify-center gap-3 p-4 rounded-lg bg-card border">
            <Award class="h-8 w-8 text-primary" />
            <div class="text-left">
              <p class="font-semibold">Certificazioni</p>
              <p class="text-sm text-muted-foreground">Tutti gli schemi</p>
            </div>
          </div>
          <div class="flex items-center justify-center gap-3 p-4 rounded-lg bg-card border">
            <GraduationCap class="h-8 w-8 text-primary" />
            <div class="text-left">
              <p class="font-semibold">Formazione</p>
              <p class="text-sm text-muted-foreground">Corsi specializzati</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
